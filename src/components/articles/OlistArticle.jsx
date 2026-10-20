import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import olistMockup from '@/assets/project-image/portfolio/olist.png';
import './ShotCutArticle.css';

export function OlistArticle({ onBack }) {
  const playClick = useClickSound();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    playClick();
    if (onBack) {
      onBack();
    }
  };

  return (
    <article className="shotcut-article-page min-h-screen bg-background text-foreground">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3.5 sm:px-6">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-4 py-1.5 text-xs font-sans text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background cursor-pointer"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-foreground font-sans sm:inline-flex items-center gap-1.5">
              <Clock className="size-3" /> 5 min read
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Olist Analytical Dashboard Case Study', url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="rounded-full border border-border/80 p-2 text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
              title="Share Case Study"
            >
              <Share2 className="size-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Article Meta Header */}
        <header className="mb-14">
          <div className="mb-8 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-border/80 bg-background px-3.5 py-1.5 text-xs font-sans text-foreground uppercase tracking-wider">
              Data Analytics & Business Intelligence
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            Olist Dashboard
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            Executive E-Commerce Performance Dashboard: Analyzing Sales Trends, Regional Shipping Delays, and Customer Sentiment with Tableau.
          </p>

          {/* Author Badge */}
          <div className="flex items-center justify-between border-y border-dashed border-border py-4 my-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full border border-border bg-foreground text-background font-bold text-sm font-sans">
                RP
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground font-sans">Raisya Putri Agustin</h2>
              </div>
            </div>

            <div className="text-right text-xs text-foreground font-sans">
              <div className="flex items-center gap-1 justify-end">
                <Calendar className="size-3" /> 2025
              </div>
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Mockup */}
        <div className="my-8">
          <MockupPlaceholder
            src={olistMockup}
            alt="Olist Company Performance Dashboard Showcase"
            title="Olist Analytical Dashboard: Executive Overview"
            badge="Tableau Dashboard"
            aspectRatio="aspect-[16/10]"
            caption="Olist Dashboard: Comprehensive business intelligence tracking 3,095 sellers, 96,096 customers, shipping delays, and product revenue trends."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: Project Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. Project Overview & Business Context
            </h2>
            <p>
              The Olist Analytical Dashboard is a comprehensive data visualization and business intelligence project developed using Tableau to provide executive decision-makers with a high-altitude, actionable overview of company performance.
            </p>
            <p>
              Using the Brazilian e-commerce giant Olist dataset (covering 96,000+ customers and 3,000+ sellers across Brazil), the dashboard addresses critical logistical bottlenecks, shipping delay variations across states, top revenue-generating categories, and customer satisfaction correlations.
            </p>
          </section>

          {/* Section 2: Personal Contribution & Techniques */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. Data Modeling & Tableau Implementation
            </h2>
            <p>
              As the Data Analyst responsible for sourcing, cleaning, and structuring the analytics pipeline, I implemented:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">Advanced Calculations</h4>
                <p className="text-sm text-muted-foreground">
                  Custom calculated fields, level of detail (LOD) expressions, and multi-table relational joins connecting order items, customer geolocation, and review scores.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">Dynamic Parameters & Sets</h4>
                <p className="text-sm text-muted-foreground">
                  Interactive parameter switching for date filters, product category breakdowns, and dynamic regional threshold comparisons.
                </p>
              </div>
            </div>
            <p className="mt-3">
              I designed specialized visualization formats: highlight tables for category pricing, geographic chloropleth maps for shipping delays, revenue monthly band charts, and histograms for review score distributions.
            </p>
          </section>

          {/* Section 3: Takeaway */}
          <div className="big-lesson-card relative overflow-hidden rounded-3xl p-8 my-10">
            <span className="big-lesson-tag text-xs uppercase tracking-widest font-sans">
              Analytics Takeaway
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white font-sans sm:text-3xl">
              Empowering Data-Driven Decision Making
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 font-sans">
              "Data alone is noise until it is structured into clear visual narratives. By combining hierarchical drill-downs with intuitive KPI cards, this dashboard enables leadership to pinpoint supply chain friction in seconds and prioritize operational improvements."
            </p>
          </div>

          {/* Contact / Discussion Footer Card */}
          <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground font-sans">Interested in Olist Analytics?</h4>
              <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and discuss data visualization, Tableau modeling & business intelligence.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/raisya-putri-agustin/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/80 bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                title="Connect on LinkedIn"
              >
                <FaLinkedin className="size-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/80 bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                title="Instagram"
              >
                <FaInstagram className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </main>
    </article>
  );
}
