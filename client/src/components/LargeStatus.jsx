import Comments from './Comments'
import MakeComment from './MakeComment'
import { PropTypes } from 'prop-types'

const { string, number } = PropTypes

LargeStatus.propTypes = {
    status: {
        image: string,
        content: string,
        likes: number
    }
}
function LargeStatus({ status }) {
    function commentButton(event) {
        event.preventDefault();

        if (event.target.parentElement.parentElement.children[6].classList.contains('hidden')) {
            event.target.parentElement.parentElement.children[6].classList.remove('hidden');
        }
        else {
            event.target.parentElement.parentElement.children[6].classList.add('hidden');
        }

    }

    return (
        <div>
            <main className="pt-4 pb-8 lg:pt-8 lg:pb-12">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="border-4 rounded-lg p-8 border-gray-900 bg-gray-800 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center justify-between mb-6 not-italic">
                                <div className="inline-flex mr-3 text-sm text-white">
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-white">{status.userName}</a>
                                        <p className="text-sm font-light text-gray-400">August 26, 2023</p>
                                    </div>
                                </div>
                                <div>
                                    <a href="#" className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-blue-400 mb-2">Status</a>
                                </div>
                            </address>

                        </header>
                        <figure><img className="mx-auto rounded-md object-contain h-96 w-96" src={`${status.image}`} alt="" />
                        </figure>
                        <br />
                        <p className="text-base font-light text-gray-400">{status.content}</p>
                        <br />
                        <div className="flex items-center">
                            <a href="#" className="text-sm font-medium underline hover:no-underline text-white">{status.likes} Likes</a>
                            <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
                            <button onClick={commentButton} id="comment-button" className="text-sm font-medium underline hover:no-underline text-white comment-buttons">Comments</button>
                        </div>
                        <div id="comment-input" className="hidden">
                            <MakeComment />
                            <Comments />
                        </div>
                        <p id="post-id" className="text-gray-800 text-opacity-0">
                            {/* post id for finding if needed */}
                        </p>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default LargeStatus