import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutEnergiesInputSchema } from './TaskTemplateCreateWithoutEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutEnergiesInputSchema';

export const TaskTemplateCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutEnergiesInputSchema;
