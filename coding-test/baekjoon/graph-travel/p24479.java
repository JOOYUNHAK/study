import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

/* 그래프 순회 - 깊이 우선 탐색 1 */
public class p24479 {
    private static int [] check;
    public static int count = 1; 
    public static ArrayList<ArrayList<Integer>> graph;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int start = Integer.parseInt(st.nextToken());

        check = new int[N+1];

        graph = new ArrayList<>();

        for(int i = 0; i <= N; i++ ) {
            graph.add(new ArrayList<>());
        }

        for( int i = 0; i < M; i++ ) {
            st = new StringTokenizer(br.readLine(), " ");
            
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());

            graph.get(from).add(to);
            graph.get(to).add(from);
        }

        for( int i = 1; i <= N; i++ ) {
            Collections.sort(graph.get(i));
        }

        dfs(start);
        
        StringBuilder sb = new StringBuilder();
        for( int i = 1; i <= N; i ++ ) {
            sb.append(check[i]).append("\n");
        }
        System.out.println(sb);
    } 

    public static void dfs(int v) {
        check[v] = count;

        int size = graph.get(v).size();

        for( int i = 0; i < size; i++ ) {
            int newV = graph.get(v).get(i);

            if( check[newV] == 0 ) {
                count++;
                dfs(newV);
            }
        }
    }
}