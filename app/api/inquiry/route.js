import clientPromise from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db(); // uses the database specified in the connection string
        const body = await request.json();
        const { name, phone, pincode, bill, service } = body;

        // Basic validation
        if (!name || !phone || !bill) {
            return NextResponse.json(
                { error: 'Name, Phone, and Monthly Bill are required fields.' },
                { status: 400 }
            );
        }

        const inquiry = {
            name,
            phone,
            pincode: pincode || '',
            bill,
            service: service || 'General Inquiry', // Default if not provided
            createdAt: new Date(),
        };

        const result = await db.collection('inquiries').insertOne(inquiry);

        return NextResponse.json(
            { message: 'Inquiry submitted successfully', id: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error saving inquiry:', error);
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

        const inquiries = await db.collection('inquiries')
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(inquiries);
    } catch (error) {
        console.error('Error fetching inquiries:', error);
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
        const result = await db.collection('inquiries').deleteOne({
            _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: 'Inquiry not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Inquiry deleted successfully' });
    } catch (error) {
        console.error('Error deleting inquiry:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
