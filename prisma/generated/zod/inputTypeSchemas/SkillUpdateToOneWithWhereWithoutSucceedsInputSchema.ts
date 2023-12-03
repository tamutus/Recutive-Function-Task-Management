import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutSucceedsInputSchema } from './SkillUpdateWithoutSucceedsInputSchema';
import { SkillUncheckedUpdateWithoutSucceedsInputSchema } from './SkillUncheckedUpdateWithoutSucceedsInputSchema';

export const SkillUpdateToOneWithWhereWithoutSucceedsInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutSucceedsInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutSucceedsInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutSucceedsInputSchema;
