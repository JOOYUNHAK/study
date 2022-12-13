# :flushed: 버전관리 :flushed:

## :dromedary_camel: git과 github의 차이점
#### `git`은 **버전 관리 시스템**이고 `github`는 git을 사용하여 코드 공유와 협업을 하기 위한 **플랫폼**

## :blowfish: Autocrlf
#### 크로스 플랫폼 프로젝트에서 window와 mac은 엔터가 각각 **rf**와 **lf**이기 때문에 혼동될 수 있어 깃에서 checkout할 때 알아서 변경해줄수 있도록 하기 위한 설정
> Window: git config --global core.autocrlf true, Mac: git config --global core.autocrlf input

## :ox: 수정 이력 보는 방법 ##
+ `git blame [옵션] (파일명)`: 해당 파일의 모든 수정사항을 볼 수 있음
    - -s 옵션: 기본적으로 blame명령어는 누가 언제 수정했는지를 나타내는데 해당 내용 출력을 원하지 않을 경우 사용
    - -L (start, end) 옵션: start라인부터 end라인까지의 수정내역만 보여준다 

+ `git show (commit id)`: 해당 commit id를 가지고 있는 commit에 대해 수정사항을 알려준다. 해당 commit을 한 시점으로 돌려놓으려면 `checkout (commit id)` 명령어를 통해 가능

## :poodle: git HEAD란
#### git은 내부적으로 **lined list**를 사용하기 때문에 가장 최신 노드를 가리키는 포인터가 존재하는데 **HEAD**가 현재 체크아웃한 브랜치의 가장 최신 커밋을 가리키는 포인터 역할을 한다.

## :cat2: git commit 수정
+ 가장 최신 commit: `git commit --amend`
+ 최신 이전 or 여러 개 수정: `git rebase -i HEAD ~ N` (N은 확인을 원하는  commit의 개수) 이후 vi에서 **pick**을 **reword**로 변경 이후 저장  
이미 원격저장소에 push를 한 경우 수정 이후 **--force** 명령으로 강제로 push 해줘야함

## :leopard: 3-way merge와fast-forward merge의 차이
`3-way merge`와 `fast-forward merge`의 가장 큰 차이는 merge commit이 생성되는지의 여부이다. 3-way merge는 merge commit이 생성되고 2개의 부모를 가르키게 된다.
