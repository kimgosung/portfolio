"use client"

import { AnimatePresence, motion } from 'framer-motion';

const SkillSection = () => {
    return (
        <AnimatePresence>
            <div className="bg-white flex-1 px-4 sm:px-16 md:px-32 lg:px-64">
                <motion.div 
                    className="flex items-center justify-center mt-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-3xl sm:text-4xl md:text-5xl font-['GmarketSansBold'] text-[#3447F7]">Skills</p>
                    <hr className="flex-1 ml-4 h-0.5 border-t-2 dark:bg-white/10" />
                </motion.div>
                <motion.div 
                    className="mt-12 flex flex-col gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="rounded-2xl bg-slate-50 p-4 flex flex-col items-start gap-8">
                        <p className="text-center font-['GmarketSansMedium'] text-xl p-2">Language</p>
                        <div className="flex flex-col w-full gap-4 p-2">
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Javascript</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-yellow-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '80%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            80%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Typescript</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-blue-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '70%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            70%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Python</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-green-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '40%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            40%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className="mt-2 flex flex-col gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="rounded-2xl bg-slate-50 p-4 flex flex-col items-start gap-8">
                        <p className="text-center font-['GmarketSansMedium'] text-xl p-2">Framework</p>
                        <div className="flex flex-col w-full gap-4 p-2">
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">React</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-yellow-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '70%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            70%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">React Native</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-blue-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '60%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            60%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">ExpressJS</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-green-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '40%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            40%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">NextJS</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-red-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '55%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            55%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className="mt-2 flex flex-col gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="rounded-2xl bg-slate-50 p-4 flex flex-col items-start gap-8">
                        <p className="text-center font-['GmarketSansMedium'] text-xl p-2">Tools</p>
                        <div className="flex flex-col w-full gap-4 p-2">
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Slack</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-yellow-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '80%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            80%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Notion</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-blue-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '70%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            70%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">AWS</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-green-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '50%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            50%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Figma</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-purple-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '80%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            80%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Git</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-gray-500 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '60%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            60%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-['GmarketSansLight'] text-sm flex-shrink-0 w-24">Jira</p>
                                <div className="flex-1 h-6 bg-gray-200 rounded-full ml-4 relative flex items-center">
                                    <motion.div 
                                        className="h-full bg-indigo-400 rounded-full flex items-center justify-center text-white font-['GmarketSansBold']"
                                        initial={{ width: 0 }}
                                        animate={{ width: '35%' }}
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.span
                                            className="text-xs"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            35%
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default SkillSection;
