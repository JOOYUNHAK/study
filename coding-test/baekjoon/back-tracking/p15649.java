import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* 재귀 - N과 M(1) */
public class p15649 {
    public static int arr []; // 방문한 노드 
    public static boolean visit []; // 방문했는지 여부
    public static void main(String[] args) throws Exception {
        // 1부터 N까지 중복 없이 M개

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        arr = new int[M];
        visit = new boolean[N]; 
        
        dfs(N, M, 0);
    }    

    private static void dfs(int n, int m, int depth) {
        /* 찾으려는 문자의 길이와 같다면 */
        if( depth == m ) {
            for( int num: arr ) {
                System.out.print(num + " ");
            }
            System.out.println();
            return;
        }

        for( int i = 0; i < n; i++ ) {
            if( !visit[i] ) {
                visit[i] = true;
                arr[depth] = i + 1;
                dfs(n, m, depth + 1);
                visit[i] = false;
            }
        }
    }
}
