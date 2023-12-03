import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutEnergiesInputSchema } from './TaskTemplateUpdateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema;
