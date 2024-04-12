import Home from '../app/page';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalProvider } from '../context/GlobalContext';
import StyledComponentsRegistry from '../app/registry';
import { ThemeProviderNext } from '../context/ThemeProvider';
const queryClient = new QueryClient();

test('renders products correctly', async () => {
    render(
        <QueryClientProvider client={queryClient}>
            <GlobalProvider>
                <StyledComponentsRegistry>
                    <ThemeProviderNext>

                        < Home />
                    </ThemeProviderNext>
                </StyledComponentsRegistry>

            </GlobalProvider>
        </QueryClientProvider>
    );
    const productNames = await screen.findAllByText(/Headset Cloud Revolver/);
    expect(productNames.length).toBeGreaterThan(0);
});