'use client'

import { Button } from '@/components/ui/button'

export function PreRegisterForm() {
  // 遷移先となる事前登録フォームのURLを指定してください
  const FORM_URL = 'https://cms6qasvp009qkpfyk2121g9l.zapier.app/'

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button 
        asChild 
        size="lg" 
        className="h-11 w-full sm:w-auto"
      >
        <a 
          href={FORM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          事前登録する
        </a>
      </Button>
    </div>
  )
}
