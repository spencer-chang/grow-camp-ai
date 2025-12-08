import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Users,
  Baby,
  FileText,
  Sparkles,
  TrendingUp,
  Tent,
  Search,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "parents" | "children" | "surveys" | "recommendations" | "reports" | "camps";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "parents", label: "家長", icon: Users },
  { id: "children", label: "孩子", icon: Baby },
  { id: "surveys", label: "問卷", icon: FileText },
  { id: "recommendations", label: "AI 推薦", icon: Sparkles },
  { id: "reports", label: "成長報告", icon: TrendingUp },
  { id: "camps", label: "營隊管理", icon: Tent },
];

// Mock data
const mockParents = [
  { id: "1", name: "王大明", email: "wang@example.com", phone: "0912-345-678", childrenCount: 2, createdAt: "2024-01-15" },
  { id: "2", name: "李小華", email: "li@example.com", phone: "0923-456-789", childrenCount: 1, createdAt: "2024-02-20" },
];

const mockCamps = [
  { id: "camp-1", name: "瑞士阿爾卑斯探險營", city: "Zermatt", category: "Outdoor", ageMin: 10, ageMax: 16, price: 4500 },
  { id: "camp-2", name: "倫敦英語沉浸學院", city: "London", category: "English", ageMin: 8, ageMax: 14, price: 3800 },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>("parents");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 min-h-screen bg-card border-r border-border p-4 hidden md:block">
            <div className="mb-8">
              <h2 className="font-display font-bold text-lg text-foreground">管理後台</h2>
              <p className="text-sm text-muted-foreground">EduGrowth Admin</p>
            </div>

            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            {/* Mobile Tab Navigation */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-6">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-shrink-0"
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h1 className="font-display text-2xl font-bold text-foreground capitalize">
                {tabs.find((t) => t.id === activeTab)?.label} 管理
              </h1>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="搜尋..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  匯出 CSV
                </Button>
                {activeTab === "camps" && (
                  <Button variant="hero">
                    <Plus className="w-4 h-4 mr-2" />
                    新增營隊
                  </Button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">124</div>
                    <div className="text-sm text-muted-foreground">家長</div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Baby className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">156</div>
                    <div className="text-sm text-muted-foreground">孩子</div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">89</div>
                    <div className="text-sm text-muted-foreground">問卷</div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-sm text-muted-foreground">報告</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                {activeTab === "parents" && (
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">姓名</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">電話</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">孩子數</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">註冊日期</th>
                        <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {mockParents.map((parent) => (
                        <tr key={parent.id} className="hover:bg-muted/30">
                          <td className="px-6 py-4 font-medium">{parent.name}</td>
                          <td className="px-6 py-4 text-muted-foreground">{parent.email}</td>
                          <td className="px-6 py-4 text-muted-foreground">{parent.phone}</td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary">{parent.childrenCount}</Badge>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">{parent.createdAt}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {activeTab === "camps" && (
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">營隊名稱</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">城市</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">類別</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">年齡</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">價格</th>
                        <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {mockCamps.map((camp) => (
                        <tr key={camp.id} className="hover:bg-muted/30">
                          <td className="px-6 py-4 font-medium">{camp.name}</td>
                          <td className="px-6 py-4 text-muted-foreground">{camp.city}</td>
                          <td className="px-6 py-4">
                            <Badge>{camp.category}</Badge>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {camp.ageMin}-{camp.ageMax} 歲
                          </td>
                          <td className="px-6 py-4">€{camp.price}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {(activeTab === "children" || activeTab === "surveys" || activeTab === "recommendations" || activeTab === "reports") && (
                  <div className="p-12 text-center">
                    <p className="text-muted-foreground">
                      連接資料庫後將顯示 {tabs.find((t) => t.id === activeTab)?.label} 資料
                    </p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
