import { Link } from "react-router-dom";
import 'animate.css';
import { useEffect } from "react";
const ErrorPage = () => {
    useEffect(()=>{
        document.title = "Error ! Back To Home."
    },[])
  return (
    <section className="flex items-center h-[100vh] p-16 bg-gray-900 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
          <span className="animate__animated animate__bounce">404</span>
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to={'/'}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
          >
            Back to homepage
          </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
