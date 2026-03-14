import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import ArchitectureSection from '../components/ArchitectureSection'
import WorkflowSection from '@/components/WorkflowSection'
import SecuritySection from '@/components/SecuritySection'
import FooterCTA from '@/components/FooterCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <Nav/>
        <HeroSection/>
      
            <ArchitectureSection/>
          <div id="lifecycle">
        <WorkflowSection />
        
      </div>
       <div id="security">
        <SecuritySection />
      </div>
      <FooterCTA/>
     
      
    </div>
  )
}
