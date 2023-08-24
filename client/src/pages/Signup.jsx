import React from 'react'

function Signup() {
  return (
    <div>
      <section class="bg-gray-800">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Sign Up
                    </h1>
                    <form class="signup-form space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-white">Your name</label>
                            <input type="name" name="name" id="name-signup" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email-signup" class="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@brewhub.com" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password-signup" placeholder="••••••••" class="border sm:text-sm rounded-lg f block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border rounded focus:ring-3  bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800" />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-300">Remember me</label>
                                </div>
                            </div>
                            
                        </div>
                        <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Sign Up</button>
                        
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Signup