import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="font-mono text-sm text-text-muted">404 · page not found</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold">This page wasn’t in the log.</h1>
      <p className="mt-4 text-text-secondary">The link may be outdated, or I moved something around.</p>
      <Button className="mt-8" leftIcon={<ArrowLeftIcon className="h-4 w-4" />} onClick={() => navigate('/')}>
        Back home
      </Button>
    </div>);

}