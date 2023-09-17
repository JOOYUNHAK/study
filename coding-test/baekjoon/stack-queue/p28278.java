import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

/* 스택 2 */
public class p28278 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Stack<Integer> stack = new Stack<>();

        int command = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for( int i = 0; i < command; i++ ) {
            String []arr = br.readLine().split(" ");
            
            int current = Integer.parseInt(arr[0]);
            System.out.println("---" + sb);
            if( current == 1 ) {
                stack.push(Integer.parseInt(arr[1]));    
            } else if( current == 2 ) {
                if( stack.isEmpty() ) sb.append(stack.pop() + "" + '\n');
                else sb.append(-1 + "" + '\n');
            } else if ( current == 3 ) {
                sb.append(stack.size() + "" + '\n');
            } else if ( current == 4 ) {
                if( stack.isEmpty() ) sb.append(1 + "" + '\n');
                else sb.append(0 + "" + '\n');
            } else {
                if( stack.isEmpty() ) sb.append(1 + "" + '\n');
                else sb.append(stack.peek() + "" + '\n');
            }
        }

        System.out.println(sb);
    }    
}
