import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreatelinksInputSchema } from './EnergiesToProjectTemplatesCreatelinksInputSchema';
import { EnergyCreateNestedOneWithoutProjectTemplatesInputSchema } from './EnergyCreateNestedOneWithoutProjectTemplatesInputSchema';

export const EnergiesToProjectTemplatesCreateWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateWithoutProjectInput> = z.object({
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  info: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default EnergiesToProjectTemplatesCreateWithoutProjectInputSchema;
