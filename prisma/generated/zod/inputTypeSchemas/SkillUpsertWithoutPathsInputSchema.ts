import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutPathsInputSchema } from './SkillUpdateWithoutPathsInputSchema';
import { SkillUncheckedUpdateWithoutPathsInputSchema } from './SkillUncheckedUpdateWithoutPathsInputSchema';
import { SkillCreateWithoutPathsInputSchema } from './SkillCreateWithoutPathsInputSchema';
import { SkillUncheckedCreateWithoutPathsInputSchema } from './SkillUncheckedCreateWithoutPathsInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutPathsInputSchema: z.ZodType<Prisma.SkillUpsertWithoutPathsInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPathsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPathsInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutPathsInputSchema;
