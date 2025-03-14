import { getAIResponse } from "@/server/ai";
import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ChatMessage() {
    const [messages, setMessages] = useState<{ prompt: string; response: string }[]>([]);
    const [prompt, setPrompt] = useState("");

    const handleSend = async () => {
        const aiResponse = await getAIResponse(prompt);
        setMessages([...messages, { prompt, response: aiResponse }]);
        setPrompt("");
    };

    return (
        <Card className="w-full max-w-lg py-4">
            <CardHeader>
                <CardTitle>Chatbot</CardTitle>
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
                        <div className="flex gap-4 items-center">
                            <Image
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="User Photo"
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            <p className="text-gray-700">
                                <span className="font-bold">AI :</span> {msg.response}
                            </p>
                        </div>
                    </div>
                ))}
                {prompt && !messages.find(msg => msg.prompt === prompt) && (
                    <div className="flex gap-4 items-center">
                        <Image
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="User Photo"
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
            <div className="relative flex flex-col gap-2 ">
                <div className="flex gap-4 p-4 border-t border-gray-200">
                    <Input
                        type="text"
                        placeholder="Tapez votre message..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && prompt.trim()) {
                                handleSend();
                            }
                        }}
                        className="flex-grow"
                    />
                </div>
                <div className="absolute -bottom-7 left-80 right-1 flex justify-center items-center py-4">
                {/* add icon file here for upload file */}

                    <Image src="/image.png" alt="Upload File" width={14} height={14} />
                    <p>Upload File</p>
                </div>
            </div>
        </Card>
    );
}