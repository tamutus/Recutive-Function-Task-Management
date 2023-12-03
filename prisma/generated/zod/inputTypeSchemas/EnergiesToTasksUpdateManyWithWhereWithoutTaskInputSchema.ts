import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksScalarWhereInputSchema } from './EnergiesToTasksScalarWhereInputSchema';
import { EnergiesToTasksUpdateManyMutationInputSchema } from './EnergiesToTasksUpdateManyMutationInputSchema';
import { EnergiesToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './EnergiesToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const EnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTasksUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema;
