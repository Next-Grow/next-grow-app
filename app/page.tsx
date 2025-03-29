'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
  Cpu
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

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
            AI Developer & Tech Mentor
          </motion.h1>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setActiveSection('about')}>About</Button>
            <Button variant="ghost" onClick={() => setActiveSection('ai')}>AI開発</Button>
            <Button variant="ghost" onClick={() => setActiveSection('teaching')}>教育</Button>
            <Button variant="ghost" onClick={() => setActiveSection('contact')}>お問い合わせ</Button>
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
                  AIと人間の強みを活かした次世代開発
                </span>
              </div>
              <h2 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                AI時代のフロントエンド開発者 & <br />
                テックメンター
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                最新のAI技術と10年以上の開発経験を組み合わせ、<br />
                革新的なソリューションと効果的な学習支援を提供します
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90">
                  <Zap className="mr-2 h-4 w-4" />
                  プロジェクトを依頼
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  学習相談
                </Button>
              </div>
            </motion.div>
          </section>

          {/* AI Features Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">AI開発の特徴</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                最新のAI技術を活用し、開発効率と品質を<br />
                大幅に向上させています
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 space-y-4 h-full hover:shadow-lg transition-all hover:scale-105">
                    <div className="p-2 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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

          {/* Teaching Section */}
          <section className="space-y-12 bg-gradient-to-br from-accent/50 to-background -mx-4 px-4 py-16 rounded-3xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">AI時代の学習支援</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                最新のAIツールを活用した効率的な学習方法で、<br />
                あなたのエンジニアとしての成長を加速します
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teachingPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 space-y-4 h-full border-2 hover:border-primary/50 transition-all hover:-translate-y-2">
                    <div className="p-2 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                      {point.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center pt-8">
              <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90">
                <Coffee className="mr-2 h-4 w-4" />
                無料相談を予約する
              </Button>
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">実績プロジェクト</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AIを活用した革新的なソリューションで、<br />
                クライアント様のビジネス成長に貢献しています
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-primary/20 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Rocket className="mr-2 h-4 w-4" />
                        詳細を見る
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold">お問い合わせ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI開発プロジェクトのご相談、学習支援について、<br />
              お気軽にお問い合わせください
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90">
                <Mail className="mr-2 h-4 w-4" />
                プロジェクトの相談
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Coffee className="mr-2 h-4 w-4" />
                オンライン面談
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}