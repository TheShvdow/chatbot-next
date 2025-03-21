import { getAIResponse } from "@/server/ai";
import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";

export default function ChatMessage() {
    const [messages, setMessages] = useState<{ prompt: string; response: string }[]>([]);
    const [prompt, setPrompt] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSend = async () => {
        const aiResponse = await getAIResponse(prompt);
        setMessages([...messages, { prompt, response: aiResponse }]);
        setPrompt("");
    };

    const handleFileUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Ajoute quelques métadonnées du fichier au prompt sans inclure la Data URL
            const fileInfo = ` [Uploaded File: ${file.name} | ${file.type} | ${file.size} bytes] `;
            setPrompt((prev) => prev + fileInfo);
        }
    };

    return (
        <Card className="w-screen max-w-7xl py-4 h-full flex flex-col justify-between">
            <CardHeader className="flex justify-center items-center border-b border-gray-300">
                <CardTitle className="text-xl text-center flex justify-center items-center gap-2 underline">
                    <p className="flex">Jangu-
                        <span className="text-blue-500 flex">Bi 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a5fb4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
                        </span>
                     </p> 
                    <span className="text-lg">Assistant</span>
                </CardTitle>
            </CardHeader>   
            <CardContent className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="flex flex-col items-end gap-5">
                        <div className="flex justify-end items-start gap-4">
                            <div className="flex gap-4 items-center">
                                <p className="text-gray-700">
                                    {msg.prompt} <span className="font-bold">: Vous </span>
                                </p>
                                <Image
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    alt="User Photo"
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Image
                                src="/robot.avif"
                                alt="Robot photo"
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            <div className="text-gray-700">
                                <span className="font-bold">AI :</span>
                                <div className="prose max-w-none">
                                    <ReactMarkdown
                                        components={{
                                            h1: (props) => <h1 className="text-2xl font-bold my-4" {...props} />,
                                            h2: (props) => <h2 className="text-xl font-semibold my-3" {...props} />,
                                            p: (props) => <p className="my-2 leading-7" {...props} />,
                                            li: (props) => (
                                                <li className="ml-4 my-2 list-disc" {...props} />
                                            ),
                                            ul: (props) => <ul className="ml-8" {...props} />,
                                            ol: (props) => <ol className="ml-8" {...props} />,
                                            code: ({ children, ...props }) => (
                                               <div className="bg-gray-100 p-1 rounded">
                                               <code className="bg-gray-200 px-1 rounded" {...props}>
                                                    {children as string}
                                                </code>
                                                </div>
                                            )
                                            // Ajoutez d'autres éléments (blockquote, code…) si nécessaire
                                        }}
                                    >
                                        {msg.response}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {prompt && !messages.find((msg) => msg.prompt === prompt) && (
                    <div className="flex gap-4 items-center">
                        <Image
                            src="/robot.avif"
                            alt="Robot photo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div className="animate-pulse flex space-x-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        </div>
                    </div>
                )}
            </CardContent>
            <div className="relative flex flex-col gap-2 py-4">
                <div className="flex gap-4 p-4 border-t border-gray-200">
                    <Input
                        type="text"
                        placeholder="Tapez votre message..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && prompt.trim()) {
                                handleSend();
                            }
                        }}
                        className="flex-grow"
                    />
                </div>
                <div className="absolute -bottom-3 left-70 right-10 flex justify-center items-center py-4">
                    {/* Bouton pour charger un fichier */}
                    <div className="flex items-center gap-1 cursor-pointer" onClick={handleFileUpload}>
                        <Image src="/image.png" alt="Upload File" width={14} height={14} />
                        <p>Upload File</p>
                    </div>
                    {/* Input caché pour le chargement du fichier */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
        </Card>
    );
}