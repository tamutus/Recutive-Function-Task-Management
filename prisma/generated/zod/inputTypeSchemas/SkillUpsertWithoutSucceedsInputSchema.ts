import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutSucceedsInputSchema } from './SkillUpdateWithoutSucceedsInputSchema';
import { SkillUncheckedUpdateWithoutSucceedsInputSchema } from './SkillUncheckedUpdateWithoutSucceedsInputSchema';
import { SkillCreateWithoutSucceedsInputSchema } from './SkillCreateWithoutSucceedsInputSchema';
import { SkillUncheckedCreateWithoutSucceedsInputSchema } from './SkillUncheckedCreateWithoutSucceedsInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutSucceedsInputSchema: z.ZodType<Prisma.SkillUpsertWithoutSucceedsInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutSucceedsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutSucceedsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSucceedsInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutSucceedsInputSchema;
