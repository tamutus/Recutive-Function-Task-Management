import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesScalarWhereInputSchema } from './PrivateEnergiesToTaskTemplatesScalarWhereInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
