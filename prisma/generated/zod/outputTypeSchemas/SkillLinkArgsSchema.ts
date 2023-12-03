import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkSelectSchema } from '../inputTypeSchemas/SkillLinkSelectSchema';
import { SkillLinkIncludeSchema } from '../inputTypeSchemas/SkillLinkIncludeSchema';

export const SkillLinkArgsSchema: z.ZodType<Prisma.SkillLinkDefaultArgs> = z.object({
  select: z.lazy(() => SkillLinkSelectSchema).optional(),
  include: z.lazy(() => SkillLinkIncludeSchema).optional(),
}).strict();

export default SkillLinkArgsSchema;
