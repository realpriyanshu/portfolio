export function Achivements() {
    return (
        <>
            <div className="text-sm sm:text-base animate-blur-fade-in px-4 sm:px-0">
                <div className="text-sm sm:text-base font-medium text-white">achievements</div>
                <div className="mt-2">
                    <li> institute rank 1 and global rank 134 in tcs codevita 2024</li>
                    <li className="mt-1">
                        Solved 200+ questions on{" "}
                        <a
                            className="text-gray-300 hover:text-yellow-500"
                            href="https://www.geeksforgeeks.org/user/priyanshumewada/"
                        >
                            Geeks for Geeks
                        </a>{" "}
                        &{" "}
                        <a
                            href="https://leetcode.com/u/realpriyanshu/"
                            className="text-gray-300 hover:text-yellow-500"
                        >
                            Leetcode
                        </a>
                    </li>
                </div>
                <div className="text-sm sm:text-base font-medium mt-3 text-white">writings</div>
                <div className="mt-2">
                    <li>
                        <a className="text-gray-300 hover:text-yellow-500">
                            AWS Storage Solutions Decoded:
                        </a>{" "}
                        Understanding EBS, EFS, and S3
                    </li>
                </div>
            </div>
        </>
    );
}
