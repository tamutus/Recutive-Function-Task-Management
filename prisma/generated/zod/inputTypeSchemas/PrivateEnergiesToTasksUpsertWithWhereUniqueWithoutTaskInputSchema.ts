import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUpdateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema';

export const PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;
