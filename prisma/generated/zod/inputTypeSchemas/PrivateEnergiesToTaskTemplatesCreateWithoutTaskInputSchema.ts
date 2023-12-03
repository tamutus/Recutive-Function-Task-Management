import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateWithoutTaskInput> = z.object({
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema;
