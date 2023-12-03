import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutPrecedesInputSchema } from './SkillUpdateWithoutPrecedesInputSchema';
import { SkillUncheckedUpdateWithoutPrecedesInputSchema } from './SkillUncheckedUpdateWithoutPrecedesInputSchema';

export const SkillUpdateToOneWithWhereWithoutPrecedesInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutPrecedesInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrecedesInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutPrecedesInputSchema;
