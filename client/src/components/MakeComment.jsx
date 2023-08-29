import React from 'react'

function MakeComment() {
  return (
    <div>
        <section class="bg-gray-800 pt-4">
            <div class="max-w-2xl mx-auto px-4">
                <hr />
                <form action="/api/comments" method="post" id="comment-form" class="my-6 comment-forms">
                    <div class="py-2 px-4 mb-4 bg-gray-700 rounded-lg rounded-t-lg border border-gray-600">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea id="new-comment" rows="2" data="{{post_id}}"
                            class="new-comment px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-700"
                            placeholder="Write a comment..." required></textarea>
                    </div>
                    <button type="submit"
                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800">
                        Post comment
                    </button>
                </form>
                <hr />
            </div>
        </section>
    </div>
  )
}

export default MakeComment