import { FormProvider } from 'react-hook-form';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import type { AdicionarTransacaoDialogProps } from './adicionarTransacaoDialog.types';
import { useAdicionarTrasacaoDialog } from './useAdicionarTrasacaoDialog';
import { Fields } from './fields/fields';

const AdicionarTransacaoDialog = (props: AdicionarTransacaoDialogProps) => {
  const { methods, handleClose, handleSubmit } = useAdicionarTrasacaoDialog(props);

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Adicionar transação</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <DialogContent>
            <Fields />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="inherit">
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export { AdicionarTransacaoDialog };
