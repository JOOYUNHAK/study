import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;

public class PocketMon {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String number[] = br.readLine().split(" ");

        int N = Integer.parseInt(number[0]);
        int M = Integer.parseInt(number[1]);

        HashMap<String, Integer> map = new HashMap<String, Integer>();
        String[] index = new String[N + 1];
        
        for( int i = 1; i <= N; i++ ) {
            String name = br.readLine();

            map.put(name, i);
            index[i] = name;
        }

        StringBuilder sb = new StringBuilder();

        for( int i = 0; i < M; i++ ) {
            String input = br.readLine();

            if(input.matches("^[0-9]*")) {
                int a = Integer.parseInt(input);
                sb.append(index[a] + "\n");
            }else {
                sb.append(map.get(input) + "\n");
            }
        }
        System.out.println(sb);
    }
}
