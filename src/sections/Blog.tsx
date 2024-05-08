function Blog({ reference, inView }: { reference: any; inView: boolean }) {
    return (
            <div className={`min-h-screen w-full grid section opacity-0 transform transition duration-2000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''
                }}`} ref={reference}>
                <div className="flex justify-center items-center md:flex-row flex-col">
                    <div className="text-slate-50 font-incon flex flex-col justify-center items-center md:w-1/2 h-full p-10">
                        <h1 className='text-2xl text-center'>Welcome to my blog!</h1>
                        <div className="max-w-2xl pt-10">
                            <p className="text-center">
                                In this section, I share my thoughts, insights, and experiences related to software development, technology, and personal growth.
                            </p>
                            <p className='pt-5 text-center'>
                                Through my blog posts, I aim to provide valuable information, tips, and lessons learned from my journey as a software engineer.
                            </p>
                            <p className="pt-5 text-center">
                                Feel free to explore my latest blog posts below and don't hesitate to leave a comment or reach out if you have any questions or topics you'd like me to cover in future posts.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                            <div className={`fade-icons ${inView ? 'animate' : ''}`}>
                                <a href="/blog/post-1" className="block">
                                    <img alt="Blog Post 1" className="w-full rounded-md" />
                                    <h2 className="mt-4 text-xl font-bold">Blog Post 1 Title</h2>
                                    <p className="mt-2">Brief description or excerpt of blog post 1...</p>
                                </a>
                            </div>
                            <div className={`fade-icons ${inView ? 'animate' : ''}`}>
                                <a href="/blog/post-2" className="block">
                                    <img  alt="Blog Post 2" className="w-full rounded-md" />
                                    <h2 className="mt-4 text-xl font-bold">Blog Post 2 Title</h2>
                                    <p className="mt-2">Brief description or excerpt of blog post 2...</p>
                                </a>
                            </div>
                            <div className={`fade-icons ${inView ? 'animate' : ''}`}>
                                <a href="/blog/post-3" className="block">
                                    <img alt="Blog Post 3" className="w-full rounded-md" />
                                    <h2 className="mt-4 text-xl font-bold">Blog Post 3 Title</h2>
                                    <p className="mt-2">Brief description or excerpt of blog post 3...</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Blog;