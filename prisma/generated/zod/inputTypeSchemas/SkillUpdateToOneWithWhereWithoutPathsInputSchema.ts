import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutPathsInputSchema } from './SkillUpdateWithoutPathsInputSchema';
import { SkillUncheckedUpdateWithoutPathsInputSchema } from './SkillUncheckedUpdateWithoutPathsInputSchema';

export const SkillUpdateToOneWithWhereWithoutPathsInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutPathsInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutPathsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPathsInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutPathsInputSchema;
