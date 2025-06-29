"use client"

import React, { useState } from 'react'
import MDEditor from "@uiw/react-md-editor"
import { Send } from 'lucide-react';

import { Input } from './ui/input';
import { Button } from './ui/button';

export default function StartupForm() {

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const isPending = false;

    return (
        <form action={() => { }} className='startup-form'>
            <div>
                <label htmlFor='title' className='startup-form_label'>Title</label>
                <Input id='title' name='title' className='startup-form_input' placeholder='Startup Title' required />
                {errors.title && <p className='startup-form_error'>{errors.title}</p>}
            </div>

            <div>
                <label htmlFor='description' className='startup-form_label'>Description</label>
                <Input id='description' name='description' className='startup-form_input' placeholder='Startup Description' required />
                {errors.description && <p className='startup-form_error'>{errors.description}</p>}
            </div>

            <div>
                <label htmlFor='category' className='startup-form_label'>Category</label>
                <Input id='category' name='category' className='startup-form_input' placeholder='Startup Category (Tech, Health, Education...)' required />
                {errors.category && <p className='startup-form_error'>{errors.category}</p>}
            </div>

            <div>
                <label htmlFor='link' className='startup-form_label'>Image URL</label>
                <Input id='link' name='link' className='startup-form_input' placeholder='Startup Image URL' required />
                {errors.link && <p className='startup-form_error'>{errors.link}</p>}
            </div>

            <div data-color-mode="light">
                <label htmlFor='pitch' className='startup-form_label'>Pitch</label>
                <MDEditor value={pitch} onChange={(value) => setPitch(value!)} preview='edit' height={300} style={{ borderRadius: 20, overflow: 'hidden' }} textareaProps={{
                    placeholder: 'Briefly describe your idea dn what problem it solves'
                }}
                    previewOptions={{ disallowedElements: ['style'] }} />
                {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}
            </div>

            <Button type='submit' className='startup-form_btn text-white' disabled={isPending}>
                {isPending ? 'Submitting...' : 'Submit your pitch'}
                <Send className='size-6 ml-2' />
            </Button>
        </form>
    )
}
