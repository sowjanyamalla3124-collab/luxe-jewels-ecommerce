'use client'

import { useState } from 'react'
import { Upload, FileSpreadsheet, CheckCircle } from 'lucide-react'

export default function BulkImportPage() {
  const [step, setStep] = useState(1)
  const [file, setFile] = useState(null)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-2">Bulk Product Import</h1>
      <p className="text-charcoal/60 mb-8">Upload Excel, CSV, PDF or JSON to import products at once.</p>

      <div className="flex gap-4 mb-8 text-sm">
        {[1,2,3,4,5].map(s => (
          <div key={s} className={`px-3 py-1 rounded-full ${step >= s ? 'bg-gold text-white' : 'bg-champagne/30'}`}>
            Step {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="border-2 border-dashed border-champagne rounded-2xl p-12 text-center bg-white">
          <Upload className="mx-auto text-gold mb-4" size={48} />
          <p className="mb-4">Drag & drop your file here</p>
          <input type="file" accept=".xlsx,.xls,.csv,.pdf,.json,.xml" onChange={(e) => setFile(e.target.files[0])} className="hidden" id="file" />
          <label htmlFor="file" className="bg-charcoal text-white px-6 py-2 rounded-full cursor-pointer">Browse Files</label>
          {file && <p className="mt-4 text-sm">Selected: {file.name}</p>}
          <button onClick={() => setStep(2)} disabled={!file} className="mt-6 bg-gold text-white px-8 py-2 rounded-full disabled:opacity-50">
            Next: Extract Data
          </button>
        </div>
      )}

      {step > 1 && (
        <div className="bg-white p-6 rounded-2xl border">
          <p className="mb-4">Data extraction and mapping interface for {file?.name}</p>
          <button onClick={() => setStep(step + 1)} className="bg-gold text-white px-6 py-2 rounded-full">Continue</button>
        </div>
      )}
    </div>
  )
}
