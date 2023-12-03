import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesScalarWhereInputSchema } from './EnergiesToTaskTemplatesScalarWhereInputSchema';
import { EnergiesToTaskTemplatesUpdateManyMutationInputSchema } from './EnergiesToTaskTemplatesUpdateManyMutationInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
