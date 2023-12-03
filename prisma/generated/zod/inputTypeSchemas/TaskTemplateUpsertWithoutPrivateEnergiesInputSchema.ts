import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUpdateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutPrivateEnergiesInputSchema;
