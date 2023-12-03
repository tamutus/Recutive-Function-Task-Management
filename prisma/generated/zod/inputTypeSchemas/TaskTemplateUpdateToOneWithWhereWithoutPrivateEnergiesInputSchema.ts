import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUpdateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
