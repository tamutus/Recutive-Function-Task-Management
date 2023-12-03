import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutEnergiesInputSchema } from './TaskTemplateUpdateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema';
import { TaskTemplateCreateWithoutEnergiesInputSchema } from './TaskTemplateCreateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutEnergiesInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutEnergiesInputSchema;
