'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Monitor, 
  Palette, 
  GraduationCap,
  Users,
  Brain,
  Rocket,
  Target,
  Coffee,
  Sparkles,
  Bot,
  Zap,
  LineChart,
  Workflow,
  Lightbulb,
  Cpu,
  Calendar,
  Award,
  Star,
  BookOpen,
  Clock,
  CheckCircle,
  MessageCircle,
  Play,
  Database,
  Shield,
  Layers,
  Globe,
  Smartphone,
  BarChart,
  TrendingUp,
  Users2,
  Heart,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleBookingClick = () => {
    // 無料説明会予約のモーダルまたは外部リンクを開く
    window.open('https://calendly.com/next-grow-curriculum', '_blank');
  };

  const handleContactClick = () => {
    // LINE相談や問い合わせフォームを開く
    window.open('https://line.me/ti/p/@next-grow', '_blank');
  };

  const handlePricingClick = (planName: string) => {
    // 料金プランを選択した際の処理
    alert(`${planName}を選択しました。詳細な申し込み手続きについては、無料説明会でご案内いたします。`);
    handleBookingClick();
  };

  const curriculumPhases = [
    { phase: 1, title: 'Web開発基礎', weeks: '1-2週', topics: ['HTML/CSS', 'JavaScript基礎', 'Git/GitHub'] },
    { phase: 2, title: 'React基礎', weeks: '3-4週', topics: ['コンポーネント設計', 'State管理', 'イベント処理'] },
    { phase: 3, title: 'API連携', weeks: '5-6週', topics: ['REST API', '非同期処理', 'データフェッチ'] },
    { phase: 4, title: 'バックエンド開発', weeks: '7-8週', topics: ['Node.js', 'Express', 'データベース'] },
    { phase: 5, title: '認証・セキュリティ', weeks: '9-10週', topics: ['JWT', 'OAuth', 'セキュリティ対策'] },
    { phase: 6, title: 'チーム開発', weeks: '11-12週', topics: ['プロジェクト管理', 'コードレビュー', 'デプロイ'] },
  ];

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: '6ヶ月完結カリキュラム',
      description: '12フェーズに分けて体系的に学習',
      highlight: '全24週間'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'チーム開発体験',
      description: 'メンター指導による実践的な開発',
      highlight: '少人数制'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI開発ツール統合',
      description: 'Cursor、GitHub Copilotを活用',
      highlight: '最新技術'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '日本語完全対応',
      description: '日本語での丁寧なサポート',
      highlight: '安心サポート'
    }
  ];

  const testimonials = [
    {
      name: '田中 太郎',
      role: 'エンジニア転職成功',
      content: 'AIツールを使った開発手法が実践的で、転職活動でも差別化できました。',
      rating: 5
    },
    {
      name: '佐藤 花子',
      role: 'フリーランス',
      content: 'チーム開発の経験が積めて、クライアントワークに自信が持てるようになりました。',
      rating: 5
    },
    {
      name: '山田 健',
      role: 'スタートアップ CTO',
      content: 'メンター制度が充実していて、実務に即したスキルが身に付きました。',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: '基本プラン',
      price: '¥120,000',
      period: '6ヶ月',
      features: ['基礎カリキュラム', 'オンライン質問対応', '個人プロジェクト'],
      popular: false
    },
    {
      name: 'チーム開発プラン',
      price: '¥200,000',
      period: '6ヶ月',
      features: ['全カリキュラム', 'チーム開発体験', 'メンター1:1面談', 'ポートフォリオ支援'],
      popular: true
    },
    {
      name: 'プロフェッショナル',
      price: '¥300,000',
      period: '6ヶ月',
      features: ['プライベートメンター', 'キャリアサポート', '転職支援', '無制限質問'],
      popular: false
    }
  ];

  const skills = [
    { 
      icon: <Cpu className="w-6 h-6" />, 
      name: 'AI開発統合', 
      description: 'ChatGPT/LLMsを活用した次世代開発手法の実践',
      details: ['プロンプトエンジニアリング', 'AI支援コーディング', 'AIツール統合']
    },
    { 
      icon: <Code2 className="w-6 h-6" />, 
      name: 'フロントエンド開発', 
      description: 'モダンな技術スタックによる革新的なUI/UX開発',
      details: ['React/Next.js', 'TypeScript', 'Tailwind CSS']
    },
    { 
      icon: <Workflow className="w-6 h-6" />, 
      name: '自動化・効率化', 
      description: 'AIツールを活用した開発プロセスの最適化',
      details: ['CI/CD自動化', 'コード品質向上', 'テスト自動化']
    },
  ];

  const aiFeatures = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI駆動開発',
      description: 'ChatGPTとGitHub Copilotを活用した効率的な開発プロセス'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AIアシスタント統合',
      description: 'カスタムAIボットによる業務効率化とユーザーサポート'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'データ分析＆予測',
      description: '機械学習モデルを活用したビジネスインサイトの導出'
    }
  ];

  const teachingPoints = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: 'AI時代の開発スキル', 
      description: '最新のAIツールを活用した効率的な学習方法と実践的なスキル習得'
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      title: '個別最適化カリキュラム', 
      description: 'AIを活用した個人の学習進度に合わせた教材と課題の提供'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: 'ハイブリッドメンタリング', 
      description: '対面指導とAIツールを組み合わせた効果的な学習支援'
    },
  ];

  const projects = [
    {
      title: 'AI搭載ECプラットフォーム',
      description: 'パーソナライズされたレコメンデーションによる売上40%増加を実現',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800',
      tags: ['Next.js', 'OpenAI API', 'Machine Learning']
    },
    {
      title: 'スマートダッシュボード',
      description: 'AIによる予測分析とリアルタイムデータ可視化システム',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'TensorFlow.js', 'D3.js']
    },
    {
      title: 'AIチャットボット開発',
      description: '問い合わせ対応の自動化で応答時間を90%削減',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
      tags: ['LangChain', 'OpenAI', 'Node.js']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-background/80 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold"
          >
            Next.js フルスタック開発カリキュラム
          </motion.h1>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection('curriculum')}>カリキュラム</Button>
            <Button variant="ghost" onClick={() => scrollToSection('features')}>特徴</Button>
            <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>受講生の声</Button>
            <Button variant="ghost" onClick={() => scrollToSection('pricing')}>料金</Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  6ヶ月でフルスタック開発者に
                </span>
              </div>
              <h2 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Next.js フルスタック開発<br />
                実践カリキュラム
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                AI開発ツールを活用し、実際のチーム開発を通じて<br />
                即戦力となるフルスタック開発者を育成します
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90" onClick={handleBookingClick}>
                  <Play className="mr-2 h-4 w-4" />
                  無料説明会に参加
                </Button>
                <Button variant="outline" size="lg" className="px-8" onClick={() => scrollToSection('curriculum')}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  カリキュラムを見る
                </Button>
              </div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section id="features" className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">カリキュラムの特徴</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                実践的な学習環境で、確実にスキルアップできる<br />
                4つの特徴をご紹介します
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 space-y-4 h-full hover:shadow-lg transition-all hover:scale-105 text-center">
                    <div className="p-2 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center mx-auto">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.highlight}
                    </Badge>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Curriculum Section */}
          <section id="curriculum" className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">カリキュラム詳細</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                6ヶ月間で段階的に学習し、フルスタック開発者として<br />
                必要なスキルを体系的に習得できます
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculumPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 space-y-4 h-full hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {phase.phase}
                      </div>
                      <div>
                        <h3 className="font-semibold">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground">{phase.weeks}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {phase.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">専門スキル</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AIと従来の開発スキルを組み合わせ、<br />
                より効率的で革新的なソリューションを提供します
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 space-y-4 h-full hover:shadow-lg transition-all group">
                    <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                    <ul className="space-y-2">
                      {skill.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="space-y-12 bg-gradient-to-br from-accent/50 to-background -mx-4 px-4 py-16 rounded-3xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">受講生の声</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                実際にカリキュラムを受講し、キャリアアップを実現した<br />
                受講生の体験談をご紹介します
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 space-y-4 h-full border-2 hover:border-primary/50 transition-all hover:-translate-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center pt-8">
              <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90" onClick={handleBookingClick}>
                <MessageCircle className="mr-2 h-4 w-4" />
                無料相談を予約する
              </Button>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">料金プラン</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                あなたの学習スタイルに合わせて選べる<br />
                3つの料金プランをご用意しています
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className={`p-6 space-y-6 h-full relative ${plan.popular ? 'border-primary border-2' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600">
                        人気プラン
                      </Badge>
                    )}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">/ {plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-blue-600' : ''}`} onClick={() => handlePricingClick(plan.name)}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      このプランを選ぶ
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>


          {/* Contact Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold">今すぐ始めよう</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              フルスタック開発者への第一歩を<br />
              無料説明会から始めませんか？
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90" onClick={handleBookingClick}>
                <Play className="mr-2 h-4 w-4" />
                無料説明会に参加
              </Button>
              <Button size="lg" variant="outline" className="px-8" onClick={handleContactClick}>
                <MessageCircle className="mr-2 h-4 w-4" />
                LINE で相談
              </Button>
            </div>
            <div className="flex justify-center items-center gap-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>所要時間: 30分</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>完全無料</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}