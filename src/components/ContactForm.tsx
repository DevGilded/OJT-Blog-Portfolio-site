import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, SendIcon } from 'lucide-react';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';
import { Card } from './Card';

type FormValues = {name: string;email: string;subject: string;message: string;};
type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = { name: '', email: '', subject: '', message: '' };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const update = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <Card padding="lg">
      <AnimatePresence mode="wait">
        {status === 'sent' ?
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center py-10 text-center"
          role="status">
          
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success-tint text-success">
              <CheckCircle2Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-semibold">Message sent — salamat!</h2>
            <p className="mt-2 max-w-sm text-text-secondary">
              Thanks, {values.name.split(' ')[0]}. I usually reply within a day or two.
            </p>
            <Button
            className="mt-6"
            variant="secondary"
            onClick={() => {
              setValues(emptyValues);
              setStatus('idle');
            }}>
            
              Send another message
            </Button>
          </motion.div> :

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5">
          
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Name" name="name" placeholder="Juan Dela Cruz" required value={values.name} onChange={update('name')} error={errors.name} />
              <Input label="Email" name="email" type="email" placeholder="you@email.com" required value={values.email} onChange={update('email')} error={errors.email} />
            </div>
            <Input label="Subject" name="subject" placeholder="Internship question, project, or just hello" value={values.subject} onChange={update('subject')} />
            <Textarea
            label="Message"
            name="message"
            placeholder="What would you like to talk about?"
            required
            maxLength={600}
            showCount
            value={values.message}
            onChange={update('message')}
            error={errors.message} />
          
            <Button type="submit" size="lg" loading={status === 'sending'} rightIcon={<SendIcon className="h-4 w-4" />}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </Button>
          </motion.form>
        }
      </AnimatePresence>
    </Card>);

}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';else
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'That email doesn’t look right.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least a short message (10+ characters).';
  return errors;
}