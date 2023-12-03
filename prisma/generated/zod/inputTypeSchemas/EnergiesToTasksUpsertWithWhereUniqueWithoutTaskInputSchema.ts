import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksUpdateWithoutTaskInputSchema } from './EnergiesToTasksUpdateWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedUpdateWithoutTaskInputSchema } from './EnergiesToTasksUncheckedUpdateWithoutTaskInputSchema';
import { EnergiesToTasksCreateWithoutTaskInputSchema } from './EnergiesToTasksCreateWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTasksUncheckedCreateWithoutTaskInputSchema';

export const EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTasksUpdateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;
