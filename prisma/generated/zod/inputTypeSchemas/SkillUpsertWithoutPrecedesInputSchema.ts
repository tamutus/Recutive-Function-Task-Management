import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutPrecedesInputSchema } from './SkillUpdateWithoutPrecedesInputSchema';
import { SkillUncheckedUpdateWithoutPrecedesInputSchema } from './SkillUncheckedUpdateWithoutPrecedesInputSchema';
import { SkillCreateWithoutPrecedesInputSchema } from './SkillCreateWithoutPrecedesInputSchema';
import { SkillUncheckedCreateWithoutPrecedesInputSchema } from './SkillUncheckedCreateWithoutPrecedesInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutPrecedesInputSchema: z.ZodType<Prisma.SkillUpsertWithoutPrecedesInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrecedesInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrecedesInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutPrecedesInputSchema;
