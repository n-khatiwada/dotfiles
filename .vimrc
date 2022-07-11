call plug#begin('~/.vim/plugged')

Plug 'lervag/vimtex'
    let g:tex_flavor = 'tex'
    let g:tex_flavor='latex'
    let g:vimtex_view_method='zathura'
    let g:vimtex_quickfix_mode=0
    let g:vimtex_compiler_latexmk = {
                \ 'options' : [
            \   '-shell-escape' ,
            \   '-verbose' ,
            \   '-file-line-error',
            \   '-synctex=1' ,
            \   '-interaction=nonstopmode' ,
            \ ],
            \}


Plug 'sirver/ultisnips'
    let g:UltiSnipsExpandTrigger = '<tab>'
    let g:UltiSnipsJumpForwardTrigger = '<tab>'
    let g:UltiSnipsJumpBackwardTrigger = '<s-tab>'
    let g:UltiSnipsSnippetDirectories=[$HOME.'/.vim/plugged/vim-snippets/UltiSnips']
    let g:UltiSnipsExpandTrigger='<tab>'
    let g:UltiSnipsJumpForwardTrigger='<tab>'
    let g:UltiSnipsJumpBackwardTrigger='<s-tab>'
    " If you want :UltiSnipsEdit to split your window.
    let g:UltiSnipsEditSplit="vertical"		


Plug 'KeitaNakamura/tex-conceal.vim'
    set conceallevel=1
    let g:tex_conceal='abdmg'
    hi Conceal ctermbg=none

    
Plug 'dylanaraps/wal'
Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
Plug 'hkupty/iron.nvim'
Plug 'kana/vim-textobj-user'
Plug 'kana/vim-textobj-line'
Plug 'GCBallesteros/vim-textobj-hydrogen'
Plug 'GCBallesteros/jupytext.vim'
Plug 'instant-markdown/vim-instant-markdown', {'for': 'markdown', 'do': 'yarn install'}
Plug 'metakirby5/codi.vim'
Plug 'dhruvasagar/vim-table-mode' 
Plug 'dpelle/vim-LanguageTool'
Plug '907th/vim-auto-save'
Plug 'xolox/vim-lua-ftplugin'
    let g:lua_compiler_name = '/usr/local/bin/luac'
Plug 'xolox/vim-misc'


let g:jupytext_fmt = 'py'
let g:jupytext_style = 'hydrogen'
let g:kite_tab_complete=1
let g:languagetool_jar='~/LanguageTool-5.2/languagetool-commandline.jar'

call plug#end()

" autocmd CursorHold,CursorHoldI * if &ft!~?'tex,latex'|update|endif
" set updatetime=3000
" set noswapfile
" set ttyfast
colorscheme wal
set background=dark
set guioptions+=a


vnoremap <C-c> "+y
nmap ]x ctrih/^# %%<CR><CR>
inoremap <C-l> <c-g>u<Esc>[s1z=`]a<c-g>u
inoremap <F9> <Esc>:w<CR>i
vnoremap <C-#> :s/^/#
autocmd FileType python map <buffer> <F9> :w<CR>:exec '!python3' shellescape(@%, 0) '> /dev/pts/0'<CR>
autocmd FileType python imap <buffer> <F9> <esc>:w<CR>:exec '!python3' shellescape(@%, 0) '> /dev/pts/0'<CR>

" autocmd FileType python map <buffer> <F9> :w<CR>:exec '!python3' shellescape(@%, 1)<CR>
" autocmd FileType python imap <buffer> <F9> <esc>:w<CR>:exec '!python3' shellescape(@%, 1)<CR>

" Auto Save
autocmd CursorHold,CursorHoldI * update
" Use this command (I mean uncomment the above line) for autosave, * means any buffer, buffer time in
" milliseconds.
"
set number
setlocal spell
set spelllang=en_us
set hlsearch
" Tab as 4 spaces "
set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab
syntax on
filetype plugin indent on
