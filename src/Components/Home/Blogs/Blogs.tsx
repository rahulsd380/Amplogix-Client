import Container from "@/Components/Reusable/Container/Container";
import BlogCardDetails from "./BlogCardDetails";

const Blogs = () => {
    return (
        <Container>
            <div className="flex flex-col xl:flex-row justify-between gap-10 w-full">
                <div className="w-full xl:w-[70%]">
                <h1 className="text-white font-semibold text-[28px] md:text-[40px] font-Poppins">
                        <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent mr-3">
                            Featured
                        </span>
                        This Month
                    </h1>
                    <BlogCardDetails/>
                </div>
                <div className="w-full xl:w-[30%]">
                    <h1 className="text-white font-semibold text-[28px] md:text-[40px] font-Poppins">
                        <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent mr-3">
                            Popular
                        </span>
                        Posted
                    </h1>
                </div>
            </div>
        </Container>
    );
};

export default Blogs;