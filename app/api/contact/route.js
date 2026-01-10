import clientPromise from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const body = await request.json();
        const { name, email, mobile, messageType, description } = body;

        // Server-side Validation
        if (!name || !email || !mobile || !messageType || !description) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address.' },
                { status: 400 }
            );
        }

        // Validate Indian Mobile Number (starts with 6-9, 10 digits)
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(mobile)) {
            return NextResponse.json(
                { error: 'Invalid Indian mobile number.' },
                { status: 400 }
            );
        }

        const contact = {
            name,
            email,
            mobile,
            messageType,
            description,
            createdAt: new Date(),
        };

        const result = await db.collection('contacts').insertOne(contact);

        return NextResponse.json(
            { message: 'Inquiry submitted successfully', id: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error saving contact inquiry:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const contacts = await db.collection('contacts')
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'ID is required' },
                { status: 400 }
            );
        }

        const { ObjectId } = await import('mongodb');
        const result = await db.collection('contacts').deleteOne({
            _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: 'Contact not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
