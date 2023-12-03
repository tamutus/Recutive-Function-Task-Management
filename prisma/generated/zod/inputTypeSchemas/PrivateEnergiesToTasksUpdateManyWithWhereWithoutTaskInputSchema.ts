import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksScalarWhereInputSchema } from './PrivateEnergiesToTasksScalarWhereInputSchema';
import { PrivateEnergiesToTasksUpdateManyMutationInputSchema } from './PrivateEnergiesToTasksUpdateManyMutationInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema;
