import React from 'react'

function Comments() {
  return (
    <div>
        <section class="bg-gray-800 pt-4">
            <div class="max-w-2xl mx-auto px-4">
                
                <article class="p-2 mb-2 text-base border-2 border-gray-700 rounded-lg bg-gray-800">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-white">
                                    Brooke Adlesperger-Jones
                                    </p>
                            <p class="text-sm text-gray-400"><time pubdate datetime="2022-02-08"
                                    title="comment_date">August 28, 2023</time></p>
                        </div>
                        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 rounded-lg focus:ring-4 focus:outline-none bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                </path>
                            </svg>
                            <span class="sr-only">Comment settings</span>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownComment"
                            class="hidden z-10 w-36 rounded divide-y  shadow bg-gray-700 divide-gray-600">
                            <ul class="py-1 text-sm text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-600 hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-600 hover:text-white">Remove</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-400"> Bold flavors and a balanced bitterness? Sign me up for this IPA!</p>
                </article>
                
            </div>
        </section>
    </div>
  )
}

export default Comments