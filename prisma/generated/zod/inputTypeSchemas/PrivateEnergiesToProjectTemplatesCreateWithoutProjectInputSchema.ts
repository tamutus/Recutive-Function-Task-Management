import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateWithoutProjectInput> = z.object({
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema;
