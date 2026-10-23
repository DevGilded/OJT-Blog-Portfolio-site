import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WeeklyLogs } from './pages/WeeklyLogs';
import { LogEntry } from './pages/LogEntry';
import { Gallery } from './pages/Gallery';
import { Reflection } from './pages/Reflection';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logs" element={<WeeklyLogs />} />
          <Route path="logs/:slug" element={<LogEntry />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reflection" element={<Reflection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}