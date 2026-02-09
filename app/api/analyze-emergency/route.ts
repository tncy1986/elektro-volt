import { NextRequest, NextResponse } from 'next/server';
import { analyzeEmergency } from '@/lib/geminiService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { description } = body;

    if (!description || typeof description !== 'string') {
      return NextResponse.json(
        { error: 'Description is required and must be a string' },
        { status: 400 }
      );
    }

    const result = await analyzeEmergency(description);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in analyze-emergency API:', error);
    return NextResponse.json(
      { error: 'Failed to analyze emergency' },
      { status: 500 }
    );
  }
}
